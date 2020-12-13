export const sortAll = (directories) => {
    if (directories.items && directories.items.length) {
        return sortAll(directories.items);
    }
    return directories.sort((a, b) => {
        if (a.code) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
};

export const mapDirectories = ({ directories, modules }) => {
    const moduleToDirectory = directories.map(directory => {
      const items = modules.filter(module => {
        const isParent = module.directory_shortid === directory.shortid;
        const isRoot = directory.title === '.codesandbox' && !module.directory_shortid;
        return isParent || isRoot;
      });

      return {
        ...directory,
        items
      };
    });

    const sortedDirectories = moduleToDirectory.reduce((acc, directory) => {
      const isRoot = directory.title === '.codesandbox';
      if (isRoot) {
        acc.push(...directory.items.flat());
      } else {
        acc.push(directory);
      }
      
      return acc;
    }, []);

    const items = {};
    sortedDirectories.forEach((item) => {
        if (item.code || !item.directory_shortid) {
            items[item.shortid] = item;
        } else {
            // has parent - looking for parent
            const parent = sortedDirectories.find(dir => {
                return dir.shortid === item.directory_shortid;
            });
            if (!items[parent.shortid]) {
                items[parent.shortid] = parent;
            }
            items[parent.shortid] = {
                ...parent,
                items: [
                    item,
                    ...items[parent.shortid].items,
                ]
            };
        }
    });

    return sortAll(Object.values(items));
};
  
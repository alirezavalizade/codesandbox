import { mapDirectories } from '../helpers'

export default class SearchEngine {
    constructor(options) {
        this.options = options;
        this.init();
    }

    init() {
        this.find();
    }

    update(options) {
        this.options = {
            ...this.options,
            ...options,
        };
        this.init();
    }

    find() {
        const { query, onSuccess, modules, directories } = this.options;
        if (!onSuccess) {
            return;
        }
        if (!query) {
            onSuccess(mapDirectories({ modules, directories }));
            return;
        }
        onSuccess(this.filterModules());
    }

    filterModules() {
        const { modules, sensitive } = this.options;
        const query = this.query();

        return modules.filter(module => !module.is_binary)
        .map((module) => {
            let code = module.code.split(/\r?\n/).filter(line => {
                if (sensitive) {
                    return line.includes(query);
                }
                return line.toLowerCase().includes(query);
            });
            return {
                ...module,
                items: code,
                code
            }
        })
        .filter(module => module.code && module.code.length > 0);
    }

    query() {
        const { query, sensitive } = this.options;
        if (sensitive) {
            return query;
        }
        return query.toLowerCase();
    }

    destroy() {
        this.options = {};
    }
}
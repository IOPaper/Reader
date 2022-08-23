export declare interface PaperConfig {
    app: {
        name: string;
        addr: string;
    };
    header: {
        title: string;
        subtitle?: string;
        gradientRGB: {
            deg: number;
            from: string;
            to: string;
        };
    };
    footer: {
        copyright: {
            disable: boolean;
            startYear: number;
            holder: string;
            more?: string;
        };
        markdown?: string;
    };
    api: {
        addr: string;
        authorDisplay: boolean;
        // module:
    }
}

const config: PaperConfig = {
    app: {
        name: 'IO.Paper',
        addr: `${window.location.origin}/api`
    },
    header: {
        title: 'IO.Paper',
        subtitle: '非常 "水" 的博客',
        gradientRGB: {
            deg: 140,
            from: 'rgb(0,145,234)',
            to: 'rgb(24,254,255)'
        }
    },
    footer: {
        copyright: {
            disable: false,
            startYear: 2021,
            holder: 'IO.Paper',
            more: ''
        },
        markdown: ``
    },
    api: {
        addr: 'http://127.0.0.1:8080',
        authorDisplay: false,
        // module: []
    }
}

export default config

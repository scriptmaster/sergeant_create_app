import { useSignal } from './signals.ts';

export const appSettings = useSignal({
    site_name: 'Site Name',
    site_theme: '',
});

export const topMenu = useSignal([
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Page 3', path: '/page3'},
    {name: 'Page 3', path: '/page4'},
]);

export const pageMenu = useSignal({
    '': [
        {name: 'Submenu', path: '/submenu1'},
    ],
    '/about': {
        'Submenu In About': '/resume',
        'Blog': '/timelog',
        'Github': 'https://github.com/scriptmaster/',
    }
})

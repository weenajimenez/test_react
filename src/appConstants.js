/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*   see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 27/12/2018
 * @description File that contains all the literals used in the application controllers 
 * and htmls except the literals used in the view.
 */
const constant = ('Constants', { 

    // Visibility and booleans
    'Hide': 'hide',
    'Show': 'show',
    'True': 'true',
    'False': 'false',

    // Computers
    'Apple': 'apple',
    'Asus': 'asus',
    'Dell': 'dell',
    'Hp': 'hp',
    'Msi': 'msi',
    'Apostrophe': '*',
    'I3': 'i3',
    'I5': 'i5',
    'I7': 'i7',
    'I9': 'i9',
    'Four': '4',
    'Eight': '8',
    'Sixteen': '16',
    'ThirtyTwo': '32',
    'SixtyFour': '64',
    'OneHundredTwentyEight': '128',
    'Workstation': 'workstation',
    'Gaming': 'gaming',
    'Multimedia': 'multimedia',
    'Desktop': 'desktop',
    'Laptop': 'laptop',

    // Controllers
    'Filter': 'filter',
    'ShortName': 'shortName',
    'LanguageCoockie': 'NG_TRANSLATE_LANG_KEY',
    'ImgRootPath': 'resources/images/jsonPcImages/',
    'RicohHomeIframe': 'ricohHomeIframe',
    'Open': 'open',
    'Close': 'close',
    'Collapse': 'collapse',
    'NoCollapse': 'NoCollapse',
    'JsonPcPath': 'resources/data/data.json',

    // Contact Evaluator
    'EvaluatorEmail': 'sergio.cernuda@ricoh.es',
    'Close': 'x',

    // Summary
    'ImacPro': 'imacPro',
    'Ideacentre': 'ideacentre',
    'Jpg': '.jpg',
    'GT83Titan': 'GT83Titan',
    'DesktopDevices': 'desktop devices',
    'LaptopDevices': 'LaptopDevices',
    'Gamming': 'gamming',
    'Workstation': 'workstation',
    'Multimedia': 'multimedia',
    'FourGb': '4Gb',
    'EightGb': '8Gb',
    'SixteenGb': '16Gb',
    'ThirtyTwoGb': '32Gb',
    'SixtyFourGb': '64Gb',
    'Amount': 'Amount',
    'Price': 'Price',

    // Languages
    'Languages': [
        {
            id: 1,
            name: 'ENGLISH',
            shortName: 'En',
            imageUrl: 'resources/icons/languages/england.png',
            dataUrl: '/assets/en.json',
            iframeUrl: 'https://www.ricoh.co.uk/index.html'
        },
        {
            id: 2,
            name: 'SPANISH',
            shortName: 'Es',
            imageUrl: 'resources/icons/languages/spain.png',
            dataUrl: '/assets/es.json',
            iframeUrl: 'https://www.ricoh.es/index.html'
        },
        {
            id: 3,
            name: 'ITALIAN',
            shortName: 'It',
            imageUrl: 'resources/icons/languages/italian.png',
            dataUrl: 'resources/data/traslate/italian.js',
            iframeUrl: 'https://www.ricoh.it/index.html'
        },
        {
            id: 4,
            name: 'FRENCH',
            shortName: 'Fr',
            imageUrl: 'resources/icons/languages/french.png',
            dataUrl: 'resources/data/traslate/french.js',
            iframeUrl: 'https://www.ricoh.fr/index.html'
        },
        {
            id: 5,
            name: 'GERMAN',
            shortName: 'Gr',
            imageUrl: 'resources/icons/languages/german.png',
            dataUrl: 'resources/data/traslate/german.js',
            iframeUrl: 'https://www.ricoh.de/index.html'
        },
        {
            id: 6,
            name: 'PORTUGUESE',
            shortName: 'Pt',
            imageUrl: 'resources/icons/languages/portuguese.png',
            dataUrl: 'assets/i18n/translationsportuguese.js',
            iframeUrl: 'https://www.ricoh.pt/index.html'
        }
    ],      
});

export default constant;
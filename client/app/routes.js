import codeSplittingHelper from './codeSplittingHelper';

const importRoute = route => codeSplittingHelper(() => import(`./${route}/index`));

const HomePage = importRoute('HomePage');
const PageTwo = importRoute('PageTwo');
const HiddenPage = importRoute('HiddenPage');

export default [
  { path: '/', component: HomePage, exact: true },
  { path: '/pagetwo', component: PageTwo, exact: true },
  { path: '/hiddenpage', component: HiddenPage, exact: true },
];

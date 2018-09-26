const sessionOrHome = ({ url, session }) => url === '/' || session;

const checkLoggedIn = (req, res, next) => (sessionOrHome(req) ? next() : res.redirect('/'));

export { checkLoggedIn };

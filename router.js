//requests here

import { homepage, User, Members } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/user', User);
    app.get('/members', Members);
}

export default router;
import { Router } from 'express';
import physicalPlanRoute from '@modules/physicalPlan/infra/http/routes/physicalPlan.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import weeksRoute from '@modules/weeks/infra/http/routes/weeks.routes';
import sessionsRoute from '@modules/sessions/infra/http/routes/sessions.routes';
import exerciceRoute from '@modules/exercices/infra/http/routes/exercice.routes';
import exercice_sessionRoute from '@modules/exercice_session/infra/htpp/routes/exerice_session.routes';
import categoryRoute from '@modules/category/infra/http/routes/category.routes';

const route = Router();

route.use('/login', sessionsRouter);
route.use('/users', usersRouter);
route.use('/password', passwordRouter);
route.use('/physicalplans', physicalPlanRoute);
route.use('/weeks', weeksRoute);
route.use('/sessions', sessionsRoute);
route.use('/category', categoryRoute);
route.use('/exercice', exerciceRoute);
route.use('/exercicesession', exercice_sessionRoute);

export default route;

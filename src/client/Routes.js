import Website from './layout/Website/Website';
import Home, { loadHomeData } from 'views/Home';
import Contacts from 'views/Contacts';
import About from 'views/About';
import AddContact from 'views/AddContact/addcontact';
import EditContact from 'views/EditContact/editcontact';

const appRoutes = [
	{
		component: Website,
		routes: [
			{
				path: '/',
				exact: true,
				component: Contacts
				// loadData: loadHomeData
			},
			{
				path: '/about',
				exact: true,
				component: About
			}
			,{
				path: '/add',
				exact: true,
				component: AddContact
			},
			{
				path: "/edit/:id",
				exact: false,
				component: EditContact
			}

			
			/* Parameterized data */
			/* {
            path: '/route/:slug',
            exact: true,
            component: Home,
            loadDataWithMatch: loadHomeData
        }, */
		]
	}
];

export default appRoutes;

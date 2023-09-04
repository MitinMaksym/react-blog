import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { UserRole } from '@/entities/User';
import { AppRoutes, RoutePath } from '@/shared/const/router';


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: Array<UserRole>
}

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },

    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticlesEditPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticlesEditPage />,
        authOnly: true,
    },

    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPanelPage />,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        authOnly: true,
    },

    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
        authOnly: true,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
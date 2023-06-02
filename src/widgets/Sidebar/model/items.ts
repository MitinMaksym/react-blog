import { RoutePath } from 'shared/config/routerConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';



export interface SidebarItemType {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    path: string
    text: string
}

export const sidebarItemsList:Array<SidebarItemType> = [
    {Icon: AboutIcon, path: RoutePath.about, text: 'about-page-link'},
    {Icon: MainIcon, path: RoutePath.main, text: 'main-page-link'},
    {Icon: ProfileIcon, path: RoutePath.profile, text: 'profile-page-link'},
];
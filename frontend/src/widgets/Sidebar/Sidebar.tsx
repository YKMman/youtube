import "./SidebarStyles.scss";
import { PlatformList, SubscribesList, UserList } from "./ui";

const Sidebar = () => {
  return (
    <aside className="navbar">
      <PlatformList />
      <UserList />
      <SubscribesList />
    </aside>
  );
};
export default Sidebar;

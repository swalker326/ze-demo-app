import { Outlet } from 'react-router-dom';
import Header from 'header/Module';

export function RootRoute() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

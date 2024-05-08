import { useLocation } from "react-router-dom";
import { decodeSectionId, getFirstPath } from "../utils/StringUtils";
import { theme } from "antd";

export interface MenuItem {
  title?: string;
  children?: MenuItem[];
  href?: string;
}

const whitelist = {
  "/step-workflow": "introduction",
};

export const AppMenu = (props: { items?: MenuItem[] }) => {
  const location = useLocation();
  const hash = location.hash.slice(1);
  const { items = [] } = props;
  const { token } = theme.useToken();

  const shouldEmphasize = (item: MenuItem, index: number, depth: number) => {
    const firstPath = getFirstPath(location.pathname);
    if (firstPath.toLowerCase() === item.title?.toLowerCase()) {
      return true;
    }
    if (location.pathname in whitelist) {
      return (
        whitelist[location.pathname as keyof typeof whitelist].toLowerCase() ===
        item.title?.toLowerCase()
      );
    }
    return false;
  };

  const renderChildren = (data: MenuItem[], depth: number) => {
    return data.map((item, i) => (
      <ul key={`${depth}-${i}`}>
        <li className={`relative ${depth === 0 ? "mt-6" : ""}`}>
          {!item.href ? (
            <>
              <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h2>
              <div className="relative mt-3 pl-2">
                <div
                  className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  }}
                />
                {renderChildren(item.children || [], depth + 1)}
              </div>
            </>
          ) : (
            <>
              <a
                className={`relative z-10 flex hover:text-slate-950/50 justify-between gap-2 py-2 text-sm transition ${
                  depth < 2 ? "text-zinc-900" : "text-zinc-600"
                } dark:text-white`}
                href={item.href}
                style={{ paddingLeft: `${depth}rem` }}
                aria-current="page"
              >
                <span className="truncate">{item.title}</span>
              </a>
              {shouldEmphasize(item, i, depth) && (
                <div
                  className="absolute left-0 h-7 top-1 w-px"
                  style={{
                    backgroundColor: token.colorPrimary,
                    opacity: 1,
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  }}
                />
              )}
              {item.title?.toLowerCase() === decodeSectionId(hash) && (
                <div
                  className="absolute top-1 right-6 h-7 bg-slate-500/5 z-0 rounded-md"
                  style={{
                    left: "-0.5rem",
                  }}
                />
              )}
              {renderChildren(item.children || [], depth + 1)}
            </>
          )}
        </li>
      </ul>
    ));
  };

  return <>{renderChildren(items, 0)}</>;
};

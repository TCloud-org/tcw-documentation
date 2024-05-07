import { theme } from "antd";

export interface MenuItem {
  title?: string;
  children?: MenuItem[];
  href?: string;
}

export const AppMenu = (props: { items?: MenuItem[] }) => {
  const { token } = theme.useToken();
  const { items = [] } = props;

  const renderChildren = (data: MenuItem[], depth: number) => {
    console.log(depth, data);
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
                {i === 0 && (
                  <div
                    className="absolute left-2 h-6 w-px"
                    style={{
                      backgroundColor: token.colorPrimary,
                      top: "4px",
                      opacity: 1,
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  />
                )}
                {renderChildren(item.children || [], depth + 1)}
              </div>
            </>
          ) : (
            <>
              <a
                className={`flex justify-between gap-2 py-1 pr-3 text-sm transition ${
                  depth < 2 ? "text-zinc-900" : "text-zinc-600"
                } dark:text-white`}
                href={item.href}
                style={{ paddingLeft: `${depth}rem` }}
                aria-current="page"
              >
                <span className="truncate">{item.title}</span>
              </a>
              {renderChildren(item.children || [], depth + 1)}
            </>
          )}
        </li>
      </ul>
    ));
  };

  return <>{renderChildren(items, 0)}</>;
};

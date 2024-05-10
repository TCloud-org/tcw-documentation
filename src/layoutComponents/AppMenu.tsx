import { theme } from "antd";
import { useLocation } from "react-router-dom";
import {
  cleanSection,
  decodeSectionId,
  getFirstPath,
} from "../utils/StringUtils";

export interface MenuItem {
  title?: string;
  children?: MenuItem[];
  href?: string;
}

const whitelist = {
  "/step-workflow": "introduction",
};

// const options: IntersectionObserverInit = {
//   rootMargin: "0px 0px -85% 0px",
//   threshold: 0,
// };

export const AppMenu = (props: { items?: MenuItem[] }) => {
  const location = useLocation();
  const { items = [] } = props;
  const { token } = theme.useToken();
  const sectionId = location.hash.slice(1);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     const anchorTag = entry.target.querySelector("a");
  //     if (anchorTag && anchorTag.id) {
  //       if (entry.isIntersecting) {
  //         // setSectionId(anchorTag.id);
  //       }
  //     }
  //   }, options);
  //   const docElements = document.querySelector(".doc")?.children;
  //   if (docElements) {
  //     for (let i = 0; i < docElements.length; i++) {
  //       observer.observe(docElements[i]);
  //     }
  //   }

  //   return () => {
  //     const docElements = document.querySelector(".doc")?.children;
  //     if (docElements) {
  //       for (let i = 0; i < docElements.length; i++) {
  //         observer.unobserve(docElements[i]);
  //       }
  //     }
  //   };
  // }, []);

  const shouldEmphasize = (item: MenuItem) => {
    const firstPath = getFirstPath(location.pathname);
    if (
      decodeSectionId(firstPath).toLowerCase() ===
      cleanSection(item.title || "").toLowerCase()
    ) {
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

  const shouldHighlight = (item: MenuItem, depth: number) => {
    if (
      cleanSection(item.title || "").toLowerCase() ===
      decodeSectionId(sectionId).toLowerCase()
    ) {
      return true;
    }
    if (depth < 2) {
      return false;
    }
    const lastPath = location.pathname.split("/").splice(-1)[0];
    return (
      decodeSectionId(lastPath).toLowerCase() ===
      cleanSection(item.title || "").toLowerCase()
    );
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
              {shouldEmphasize(item) && (
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
              {shouldHighlight(item, depth) && (
                <div
                  className="absolute top-1 right-0 h-7 bg-slate-500/5 z-0 rounded-md"
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

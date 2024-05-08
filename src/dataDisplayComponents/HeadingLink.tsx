import { LinkOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import { useState } from "react";
import { encodeSectionId } from "../utils/StringUtils";

export const scrollToHash = () => {
  const hash = window.location.hash.slice(1);

  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const HeadingLink = (props: {
  level?: TitleProps["level"];
  children: string;
}) => {
  const { level, children } = props;
  const [isHovered, setIsHovered] = useState(false);
  const id = encodeSectionId(children);

  return (
    <Typography.Title className="heading-link" level={level}>
      <a
        id={id}
        href={`#${id}`}
        style={{ color: "black" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <LinkOutlined
          style={{
            marginLeft: "0.5rem",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </a>
    </Typography.Title>
  );
};

import { Typography } from "antd";
import { ColorLink } from "../dataEntryComponents/ColorLink";

const links = [
  {
    href: "/",
    label: "Get your API key from the TCW dashboard",
  },
  {
    href: "/step-workflow/api-reference",
    label: "Check out the Step Workflow API reference",
  },
];

export const QuickstartNext = () => {
  return (
    <Typography.Paragraph>
      <Typography.Paragraph>
        Great, you're now set up with a Step Workflow client and have made your
        first request to the API. Here are a few links that might be handy as
        you venture further into the Step Workflow API:
      </Typography.Paragraph>
      <Typography.Paragraph>
        <ul>
          {links.map((link, i) => (
            <li
              className="list-disc"
              style={{
                color: "#d4d4d8",
                marginTop: i !== 0 ? "0.75rem" : undefined,
                marginBottom: "0.75rem",
              }}
              key={i}
            >
              <ColorLink href={link.href}>{link.label}</ColorLink>
            </li>
          ))}
        </ul>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};

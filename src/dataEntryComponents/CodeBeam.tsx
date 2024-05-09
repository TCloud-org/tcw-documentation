import { Flex } from "antd";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AppCopy } from "./AppCopy";
import { CodeSegmented } from "./CodeSegmented";

export const textColor = "#f8fafc";
const borderColor = "#222c3f";

export const CodeBeam = (props: {
  value?: string;
  language: "java" | "javascript" | "python" | "xml";
  display3dots?: boolean;
  label?: string;
}) => {
  const { value = "", language = "xml", display3dots, label } = props;

  return (
    <div
      className="bg-[#0a1021] rounded-xl overflow-hidden"
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <Flex align="center" gap={16}>
          {display3dots && (
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          )}

          {label && <div style={{ color: textColor }}>{label}</div>}

          <CodeSegmented
            value="xml"
            options={[
              {
                label: "XML",
                value: "xml",
              },
            ]}
          />
        </Flex>

        <AppCopy value={value} />
      </div>
      <ReactSyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "27px",
          fontSize: "0.75rem",
          backgroundColor: "#0a1021",
          border: "none",
          color: textColor,
        }}
      >
        {`${value}`}
      </ReactSyntaxHighlighter>
    </div>
  );
};

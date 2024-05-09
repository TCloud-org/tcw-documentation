import { Flex } from "antd";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AppCopy } from "./AppCopy";
import { CodeSegmented } from "./CodeSegmented";
import { useState } from "react";

export const textColor = "#f8fafc";
const borderColor = "#222c3f";

export type Language =
  | "java"
  | "javascript"
  | "python"
  | "xml"
  | "gradle"
  | "groovy";

export interface Snippet {
  key: string;
  label: string;
  value: string;
  language: Language;
}

export const CodeBeam = (props: {
  snippets?: Snippet[];
  value?: string;
  showDots?: boolean;
  label?: string;
  onChange?: (value: string) => void;
}) => {
  const {
    value = "",
    showDots,
    label,
    snippets = [],
    onChange = () => {},
  } = props;

  const [select, setSelect] = useState<string>(value);

  const code = snippets.find((snippet) => snippet.key === select)?.value;

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
          {showDots && (
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          )}

          {label && <div style={{ color: textColor }}>{label}</div>}

          <CodeSegmented
            value={select}
            options={snippets.map((snippet) => ({
              label: snippet.label,
              value: snippet.key,
            }))}
            onChange={(e) => {
              setSelect(e);
              onChange(e);
            }}
          />
        </Flex>

        <AppCopy value={code} />
      </div>

      <ReactSyntaxHighlighter
        language={snippets.find((snippet) => snippet.key === select)?.language}
        style={atomOneDark}
        customStyle={{
          padding: "27px",
          fontSize: "0.75rem",
          backgroundColor: "#0a1021",
          border: "none",
          color: textColor,
        }}
      >
        {`${code}`}
      </ReactSyntaxHighlighter>
    </div>
  );
};

import { ReactNode } from "react";
import { textColor } from "../dataEntryComponents/CodeBeam";
import { Flex } from "antd";

const borderColor = "#222c3f";

export const ScreenContainer = (props: {
  children?: ReactNode;
  showDots?: boolean;
  label?: string;
  className?: string;
}) => {
  const { showDots, label, className } = props;

  return (
    <div
      className={`bg-[#0a1021] rounded-xl overflow-hidden ${className}`}
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <Flex align="center" gap={16} className="w-full">
          {showDots && (
            <div className="flex space-x-2 flex-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          )}

          {label && (
            <div style={{ color: textColor }} className="flex-1 text-center">
              {label}
            </div>
          )}

          <div className="flex-1" />
        </Flex>
      </div>

      {props.children}
    </div>
  );
};

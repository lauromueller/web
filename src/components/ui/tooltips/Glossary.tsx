import React, { FunctionComponent } from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

export type GlossaryProps = TooltipProps;

const Glossary: FunctionComponent<GlossaryProps> = ({ children, ...rest }) => {
  return (
    <ReactTooltip
      {...rest}
      type="light"
      effect="solid"
      clickable
      multiline
      delayHide={200}
      className="glossary-tooltip"
      overridePosition={({ top, left }, e, t, n, p) => {
        const mouseEvent = e as MouseEvent;
        let leftPos = left;

        if (p === 'top') {
          if (mouseEvent.clientX - 157 < 0) {
            leftPos = 10;
          } else if (mouseEvent.clientX + 157 > window.innerWidth) {
            leftPos = window.innerWidth - 304;
          }
        }

        return { left: leftPos, top };
      }}
    >
      {children}
    </ReactTooltip>
  );
};

export default Glossary;

import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from 'styled-components';
import { CopyCodeButton } from '../ui/buttons';

export type CodeHighlighterProps = {
  inline?: boolean;
  code: string;
  language: Language;
};

const StyledMetadataContainer = styled.div`
  margin-top: -20px;
  margin-left: -1.7em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLanguageName = styled.div`
  font-family: 'PT Sans', sans-serif;
  letter-spacing: 0.05em;
  margin-top: -0.8em;
  margin-left: 1em;
  background-color: var(--lm-color-dark);
  border-radius: 0 0 8px 8px;
  color: var(--lm-color-secondary);
  padding: 4px 12px;
  font-size: 0.8rem;
`;

const StyledPre = styled.pre`
  padding-top: 20px !important;
  position: relative;
`;

const StyledPreInline = styled.pre``;

const InvisibleTextArea = styled.textarea`
  width: 0;
  height: 0;
  z-index: -999;
  position: fixed;
`;

const ButtonTextareaContainer = styled.div`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

const CodeHighlighter: FunctionComponent<CodeHighlighterProps> = ({
  code,
  inline = false,
  language,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedText] = useState(code);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 5000);
    }
  }, [copied]);

  if (inline) {
    return (
      <Highlight
        {...defaultProps}
        theme={undefined}
        code={code}
        language={language || 'jsx'}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={className} style={style}>
            {tokens.map((line, i) => (
              <React.Fragment key={line.toString()}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </React.Fragment>
            ))}
          </code>
        )}
      </Highlight>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={code}
      language={language || 'jsx'}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          <StyledMetadataContainer>
            <StyledLanguageName>{language}</StyledLanguageName>
            <ButtonTextareaContainer>
              <CopyCodeButton
                onClick={e => {
                  if (inputRef.current) {
                    inputRef.current.select();
                    document.execCommand('copy');
                    setCopied(true);
                  }
                }}
              >
                {copied ? 'Copied' : 'Copy'}
              </CopyCodeButton>
              <InvisibleTextArea value={selectedText} ref={inputRef} readOnly />
            </ButtonTextareaContainer>
          </StyledMetadataContainer>
          <div className="code-container">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </StyledPre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;

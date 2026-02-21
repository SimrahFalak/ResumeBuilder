import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
} from 'lexical';
import { ListNode, ListItemNode } from '@lexical/list';
import { 
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
} from '@lexical/list';
import { $createParagraphNode, $getRoot } from 'lexical';

interface RichTextEditorProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [activeFormats, setActiveFormats] = React.useState({
    bold: false,
    italic: false,
    underline: false,
  });

  React.useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setActiveFormats({
            bold: selection.hasFormat('bold'),
            italic: selection.hasFormat('italic'),
            underline: selection.hasFormat('underline'),
          });
        }
      });
    });
  }, [editor]);

  const formatText = (format: 'bold' | 'italic' | 'underline') => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const insertBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const insertNumberedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  const ToolbarButton = ({ 
    onClick, 
    icon, 
    active = false 
  }: { 
    onClick: () => void; 
    icon: string; 
    active?: boolean;
  }) => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={{
        padding: '6px',
        background: active ? 'rgba(15, 19, 36, 0.10)' : 'transparent',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(15, 19, 36, 0.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />
    </button>
  );

  return (
    <>
      <div style={{
        background: '#F2F2F3',
        color: '#4B465C',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        padding: '16px 20px',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        borderBottom: '1px solid rgb(219,218,222)',
      
      }}>
        Write Description
      </div>
      <div style={{
        display: 'flex',
        padding: '10px 20px',
        alignItems: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch',
        borderBottom: '1px solid rgb(219,218,222)',
      }}>
        <ToolbarButton
          onClick={() => formatText('bold')}
          icon="/textarea/bold.svg"
          active={activeFormats.bold}
        />
        <ToolbarButton
          onClick={() => formatText('italic')}
          icon="/textarea/italic.svg"
          active={activeFormats.italic}
        />
        <ToolbarButton
          onClick={() => formatText('underline')}
          icon="/textarea/underline.svg"
          active={activeFormats.underline}
        />
         <ToolbarButton
          onClick={insertNumberedList}
          icon="/textarea/list-numbers.svg"
        />
        <ToolbarButton
          onClick={insertBulletList}
          icon="/textarea/list-check.svg"
        />
       
      </div>
    </>
  );
}

function OnChangePlugin({ onChange }: { onChange: (value: string) => void }) {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const root = $getRoot();
        const text = root.getTextContent();
        onChange(text);
      });
    });
  }, [editor, onChange]);

  return null;
}

function DeleteButton({ onClear }: { onClear: () => void }) {
  const [editor] = useLexicalComposerContext();

  const handleClear = () => {
    editor.update(() => {
      const root = $getRoot();
      root.clear();
      const paragraph = $createParagraphNode();
      root.append(paragraph);
    });
    onClear();
  };

  return (
    <div style={{
      width: '100%',
      background: 'transparent',
      borderTop: '1px solid rgb(219,218,222)',
      padding: '24px 0 24px 24px',
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <button
        type="button"
        onClick={handleClear}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(15, 19, 36, 0.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <img src="/textarea/delete.svg" alt="Clear text" style={{ width: 20, height: 20 }} />
      </button>
    </div>
  );
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  placeholder = 'Write your message...',
  onChange,
}) => {
  const initialConfig = {
    namespace: 'RichTextEditor',
    theme: {
      paragraph: 'mb-2',
      text: {
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
      },
      list: {
        ul: 'list-disc list-inside mb-2',
        ol: 'list-decimal list-inside mb-2',
        listitem: 'ml-4',
      },
    },
    onError: (error: Error) => {
      console.error(error);
    },
    nodes: [ListNode, ListItemNode],
  };

  const handleClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div className="relative">
      <LexicalComposer initialConfig={initialConfig}>
        <div style={{
          border: '1px solid rgb(219,218,222)',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#F9F9F9',
        }}>
          <ToolbarPlugin />
          <div className="relative">
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  style={{
                    minHeight: '200px',
                    padding: '10px 20px',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    outline: 'none',
                    caretColor: '#4B465C',
                  }}
                />
              }
              placeholder={
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '20px',
                  color: 'rgba(15, 19, 36, 0.30)',
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  pointerEvents: 'none',
                }}>
                  {placeholder}
                </div>
              }
              ErrorBoundary={() => <div>Error loading editor</div>}
            />
          </div>
          {/* Delete button inside the editor container */}
          <DeleteButton onClear={handleClear} />
        </div>
        <HistoryPlugin />
        <ListPlugin />
        {onChange && <OnChangePlugin onChange={onChange} />}
      </LexicalComposer>
    </div>
  );
};

import Sen from "../../../styles/sementic.module.css";
import S from "./emogebutton.module.css";

interface EmogeButtonProps {
  emoge: string;
  onClick: () => void;
  content: string;
}

export default function EmogeButton({
  emoge,
  onClick,
  content,
}: EmogeButtonProps) {
  return (
    <button
      className={`${S.button} ${Sen.background_primary_neutral}`}
      onClick={onClick}
    >
      <span className={Sen.display_1}>{emoge}</span>
      <span className={`${Sen.text_label_normal}`}>{content}</span>
    </button>
  );
}

import { btnShowType, IButtonProps } from "@/common/types";

const Button = ({
  btnName,
  type,
  showType,
  btnClass,
  onClickHandler,
  isLoading,
  loaderClass,
  disabled,
  BtnIconLeft,
  btnEndIcon,
}: IButtonProps) => {
  let btnType = "";
  switch (showType) {
    case btnShowType.Primary:
      btnType = `bg-primaryButton text-black hover:bg-primaryButtonHover py-2 px-4 rounded-md transition-colors duration-300 ${btnClass}`;
      break;
    case btnShowType.Teal:
      btnType = `bg-teal-400 hover:bg-teal-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${btnClass}`;
      break;
    case btnShowType.White:
      btnType = `bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${btnClass}`;
      break;
    default:
      btnType = ` py-2 px-4 rounded-md transition-colors duration-300 ${
        btnClass ?? ""
      }`;
  }

  return (
    <button
      className={btnType}
      type={type ? type : "button"}
      onClick={onClickHandler}
      disabled={isLoading ? true : disabled}
    >
      {BtnIconLeft}
      {btnName}
      {isLoading && (
        <span className={`inline-flex ml-3 mt-1.5 ${loaderClass ?? ""} `}>
          <div className="spinnerW"></div>
        </span>
      )}
      {btnEndIcon && btnEndIcon}
    </button>
  );
};

export default Button;

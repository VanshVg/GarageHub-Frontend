import { Controller, FieldValues } from "react-hook-form";
import { IInputProps, ITextAreaProps } from "@/common/types";
import { ErrorMessage } from "@hookform/error-message";

const TextArea = <T extends FieldValues>({
  placeholder,
  className,
  inputEndIcon,
  control,
  textLabelName,
  name,
  errors,
  autoComplete,
  isDisabled,
}: ITextAreaProps<T>) => {
  return (
    <div className="relative mb-4">
      <label className="block pb-2 text-charcoalGray font-jost text-sm md:text-base">
        {textLabelName}
      </label>

      <TextAreaField
        placeholder={placeholder}
        inputEndIcon={inputEndIcon}
        control={control}
        name={name}
        errors={errors}
        autoComplete={autoComplete}
        isDisabled={isDisabled}
        className={`rounded-lg bg-lightGray text-darkSlatePrimary placeholder-metallicSilver p-3 w-full border focus:border-deepBlue focus:ring-2 focus:ring-deepBlue transition-shadow duration-300 shadow-sm ${
          isDisabled ? "cursor-not-allowed opacity-50" : ""
        } ${className}`}
      />

      <span className="text-xs text-red-400"> </span>
    </div>
  );
};

const TextAreaField = <T extends FieldValues>({
  placeholder,
  className,
  control,
  name,
  errors,
  autoComplete,
  isDisabled,
  InputLeftIcon,
}: IInputProps<T>) => {
  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <textarea
            onBlur={onBlur}
            onChange={onChange}
            value={value || ""}
            className={`p-3 w-full text-base text-darkSlatePrimary bg-lightGray rounded-lg border border-metallicSilver focus:ring-2 focus:ring-deepBlue focus:outline-none shadow-sm placeholder-metallicSilver transition-all duration-300 ${className}`}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={isDisabled}
          />
        )}
      />

      {InputLeftIcon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          {InputLeftIcon}
        </div>
      )}

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className="block mt-1 text-sm font-medium text-red-600">
            {message}
          </span>
        )}
      />
    </div>
  );
};

export default TextArea;

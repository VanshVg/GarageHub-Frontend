import Input from "@/common/components/form-fields/Input";
import { useForm } from "react-hook-form";
import { IContactUs } from "../types";
import TextArea from "@/common/components/form-fields/TextArea";
import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import { ContactUsFormData } from "../types/constants";

const ContactUsForm = () => {
  const {
    control,
    formState: { errors },
    // handleSubmit,
  } = useForm<IContactUs>();

  return (
    <form className="mt-8 max-w-7xl mx-auto justify-center">
      <div className="lg:px-44 px-4 md:pb-36 pb-10 ">
        <div className="grid grid-cols-12 md:gap-x-7">
          <div className=" col-span-12 md:col-span-6">
            <Input
              placeholder="Enter First Name"
              name="firstName"
              textLabelName="First Name *"
              type="text"
              control={control}
              errors={errors}
              autoComplete={""}
            />
          </div>
          <div className=" col-span-12 md:col-span-6">
            <Input
              placeholder="Enter Last Name"
              name="lastName"
              textLabelName="Last Name *"
              type="text"
              control={control}
              errors={errors}
              autoComplete={""}
            />
          </div>
          <div className=" col-span-12 md:col-span-6">
            <Input
              placeholder="Enter Email Address"
              name="email"
              textLabelName="Email Address *"
              type="text"
              control={control}
              errors={errors}
              autoComplete={""}
            />
          </div>
          <div className=" col-span-12 md:col-span-6">
            <Input
              placeholder="Enter 10 Digit Phone Number"
              name="phoneNo"
              textLabelName="Phone Number"
              type="number"
              control={control}
              errors={errors}
              autoComplete={""}
            />
          </div>
        </div>

        <TextArea
          placeholder="Enter Message"
          name="message"
          textLabelName="Message"
          control={control}
          errors={errors}
          autoComplete={""}
        />
        <div className="flex md:justify-end justify-center mt-10 md:mt-16">
          <Button
            showType={btnShowType.Teal}
            btnName={ContactUsFormData.button}
            btnClass="bg-teal-400 text-white hover:bg-teal-600"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;

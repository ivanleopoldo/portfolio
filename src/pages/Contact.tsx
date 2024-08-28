import ThemedText from "@/components/ThemedText";

export default function Contact() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <form className="flex h-full flex-col items-center justify-center gap-4 text-[#F2DFD9]">
        <ThemedText className=" text-3xl font-semibold md:text-5xl">
          CONTACT ME!
        </ThemedText>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="rounded-md bg-[#353434] p-2 placeholder-[#525050] focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="rounded-md bg-[#353434] p-2 placeholder-[#525050] focus:outline-none"
              type="email"
            />
          </div>
        </div>
        <div className="w-full items-start">
          <label>What can I do for you?</label>
        </div>
        <div
          className="-mt-3.5 h-1/6 w-full rounded-md bg-[#353434] p-2 placeholder-[#525050] focus:outline-none "
          contentEditable
        />
        <input
          className="hover:bg-[#632E86] w-full rounded-lg bg-[#8D41BF] p-2"
          type="submit"
        />
      </form>
    </div>
  );
}

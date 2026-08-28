import type { PropsWithChildren } from "react";

const Gallery = ({ children }: PropsWithChildren) => (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:rounded-md [&_img]:object-cover [&>p]:contents">
        {children}
    </div>
);

export default Gallery;

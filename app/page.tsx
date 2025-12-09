
// app/page.tsx
export const metadata = {
    title: "MyStudio - Creative Digital Studio", // <-- homepage title
    description: "Crafting engaging digital experiences",
};

import HomeClient from "./components/HomeClient";

export default function Home() {
    return <HomeClient />;
}

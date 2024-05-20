"use client";
import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@nextui-org/react";
import Meteors from "@/components/ui/meteors";
import { data } from "@/database/data";
import {
  ArrowRightDouble,
  Square2StackIcon,
  TShirt,
  Album,
  Ticket,
  Funnel,
} from "@/components/icons/icons";

export default function ShopPage() {
  const icons = {
    arrowrightdouble: (
      <ArrowRightDouble
        fill="currentColor"
        size={40}
        height={undefined}
        width={undefined}
      />
    ),
    square2StackIcon: (
      <Square2StackIcon
        fill="#3172eb"
        size={40}
        height={undefined}
        width={undefined}
      />
    ),
    tshirt: (
      <TShirt fill="#3172eb" size={40} height={undefined} width={undefined} />
    ),
    album: (
      <Album fill="#3172eb" size={40} height={undefined} width={undefined} />
    ),
    ticket: (
      <Ticket fill="#3172eb" size={40} height={undefined} width={undefined} />
    ),
    funnel: (
      <Funnel fill="#3172eb" size={30} height={undefined} width={undefined} />
    ),
  };
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      // Pulizia dell'event listener quando il componente viene smontato
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <Meteors number={30} />
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Shop
        </p>
      </div>
      <div className="flex w-full flex-col items-center">
        <Tabs items={data.tabs} selectedKey={hash}>
          {(item) => (
            <Tab key={item.id} title={item.label} href={item.href}>
              <Button isIconOnly >{icons.funnel}</Button>
              <Card>
                <CardBody className="w-screen">{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
}

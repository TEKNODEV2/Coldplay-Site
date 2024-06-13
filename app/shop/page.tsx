"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Meteors from "@/components/ui/meteors";
import { data } from "@/database/data";
import { ChevronsRight, LayoutGrid, Shirt, Disc3, Ticket } from "lucide-react";

export default function ShopPage() {
  const icons = {
    arrowrightdouble: <ChevronsRight color="#3172eb" size={40} />,
    square2StackIcon: <LayoutGrid color="#3172eb" size={40} />,
    tshirt: <Shirt color="#3172eb" size={40} />,
    album: <Disc3 color="#3172eb" size={40} />,
    ticket: <Ticket color="#3172eb" size={40} />,
  };
  const [selected, setSelected]: any = React.useState("");

  React.useEffect(() => {
    window.location.hash = selected;
  });

  /* if (typeof window !== "undefined" && location.hash != (null || undefined)) {
    const handleHashChange = () => {
      setSelected(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }else if(window.location.hash !== selected) {
    console.log("ok");
    location.hash = selected;
  }; */
  React.useEffect(() => {
    const handleHashChange = () => {
      setSelected(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <Meteors number={30} />
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Shop
        </p>
      </div>
      <div className="flex w-full flex-col items-center">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="#all" title="All">
            <Card>
              <CardBody>
                <div className="flex justify-center items-center">
                  Filters: &nbsp;&nbsp;&nbsp;&nbsp;
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      // @ts-ignore
                      onSelectionChange={setSelectedKeys}
                    >
                      <DropdownItem key="text">Text</DropdownItem>
                      <DropdownItem key="number">Number</DropdownItem>
                      <DropdownItem key="date">Date</DropdownItem>
                      <DropdownItem key="single_date">Single Date</DropdownItem>
                      <DropdownItem key="iteration">Iteration</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="#merchandise" title="Merchandise">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="#album" title="Album">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="#ticket" title="Ticket">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

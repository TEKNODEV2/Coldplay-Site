"use client";
import { useEffect, useState } from "react";
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
  const [selected, setSelected]: any = useState("");

  const setHash = () => {
    useEffect(() => {
      window.location.hash = selected
    })
  }

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
  useEffect(() => {
    const handleHashChange = () => {
      setSelected(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  setHash();

  

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
          items={data.tabs}
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card>
                <CardBody className="w-screen">
                  {
                    {
                      "#all": (
                        <div className=" w-full flex justify-center items-center">
                          Filters: &nbsp;&nbsp;&nbsp;&nbsp;
                          <Dropdown backdrop="opaque">
                            <DropdownTrigger>
                              <Button variant="bordered">Open Menu all</Button>
                            </DropdownTrigger>
                            <DropdownMenu
                              variant="faded"
                              aria-label="Static Actions"
                            >
                              <DropdownItem key="new">New file</DropdownItem>
                              <DropdownItem key="copy">Copy link</DropdownItem>
                              <DropdownItem key="edit">Edit file</DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                              >
                                Delete file
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      ),
                      "#merchandise": (
                        <div className=" w-full flex justify-center">
                          <Dropdown backdrop="blur">
                            <DropdownTrigger>
                              <Button variant="bordered">
                                Open Menu merchandise
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                              variant="faded"
                              aria-label="Static Actions"
                            >
                              <DropdownItem key="new">New file</DropdownItem>
                              <DropdownItem key="copy">Copy link</DropdownItem>
                              <DropdownItem key="edit">Edit file</DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                              >
                                Delete file
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      ),
                    }[item.id]
                  }
                  {item.content}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
}

"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useReducer, useState } from "react";
import { usePathname } from "next/navigation";

//Icons
import * as herosolid from '@heroicons/react/24/solid'
import * as herooutline from '@heroicons/react/24/outline'
import { FaUser } from "react-icons/fa";
import { icons } from "lucide-react";
import { ArrowRightDouble, Square2StackIcon, TShirt, Album, Ticket } from "./icons/icons";

export const Navbar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);
  const [isLogged, setIsLogged] = useState(false);
  const [selected, setSelected] = useState<string | number>("login");

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const icons = {
    arrowrightdouble: <ArrowRightDouble fill="currentColor" size={40} height={undefined} width={undefined} />,
    square2StackIcon: <Square2StackIcon fill="#3172eb" size={40} height={undefined} width={undefined} />,
    tshirt: <TShirt fill="#3172eb" size={40} height={undefined} width={undefined} />,
    album: <Album fill="#3172eb" size={40} height={undefined} width={undefined} />,
    ticket: <Ticket fill="#3172eb" size={40} height={undefined} width={undefined} />,
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <p className="font-bold text-3xl">COLDPLAY</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <>
              {index != 2 && (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={
                      pathname == item.href
                        ? "font-bold text-xl pb-1 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300"
                        : "font-bold text-xl pb-1 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                    }
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              )}
              {index === 2 && (
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <NextLink
                        className={
                          pathname == item.href
                            ? "font-bold text-xl pb-1 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 focus:outline-none"
                            : "font-bold text-xl pb-1 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 focus:outline-none"
                        }
                        color="foreground"
                        href="#"
                      >
                        {item.label}
                      </NextLink>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                      title: "font-bold text-lg"
                    }}
                  >
                    <DropdownItem
                      startContent={icons.square2StackIcon}
                      title="Tutti i prodotti"
                      description="vedi merch, eventi, albums"
                      endContent={icons.arrowrightdouble}
                      href="/shop#all"
                    ></DropdownItem>
                    <DropdownItem
                      startContent={icons.tshirt}
                      title="Merchandise"
                      description="vedi magliette e altri articoli"
                      endContent={icons.arrowrightdouble}
                      href="/shop#merchandise"
                    ></DropdownItem>
                    <DropdownItem
                      startContent={icons.album}
                      title="Album"
                      description="vedi gli album"
                      endContent={icons.arrowrightdouble}
                      href="/shop#album"
                    ></DropdownItem>
                    <DropdownItem
                      startContent={icons.ticket}
                      title="Tutti gli eventi"
                      description="vedi biglietti acquistabili"
                      endContent={icons.arrowrightdouble}
                      href="/shop#ticket"
                    ></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
            </>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button isIconOnly variant="light" onClick={onOpen}>
            <FaUser className="!text-default-500" size={19} />
          </Button>
          <ThemeSwitch />
          {/* {isLogged ? (
            <>
              <NextLink
                className="text-xl"
                color="primary"
                href="#"
                onClick={() => {
                  setIsMenuOpen();
                }}
              >
                Accedi
              </NextLink>
              <NextLink
                className="text-xl"
                color="primary"
                href="#"
                onClick={() => {
                  setIsMenuOpen();
                }}
              >
                Registrati
              </NextLink>
            </>
          ) : (
            <>
              <NextLink
                className="text-xl"
                href="#"
                onClick={() => {
                  setIsMenuOpen();
                }}
              >
                <FaUser />
              </NextLink>
              <NextLink
                className="text-xl text-danger"
                href="#"
                onClick={() => {
                  setIsMenuOpen();
                }}
              >
                Esci
              </NextLink>
            </>
          )} */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NextLink
                className={
                  pathname == item.href
                    ? "text-xl text-secondary"
                    : "text-xl text-foreground"
                }
                href={item.href}
                onClick={() => {
                  setIsMenuOpen();
                  console.log(item.href);
                }}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <Divider orientation="horizontal" />
          {isLogged ? (
            <>
              <NavbarMenuItem>
                <NextLink
                  className="text-xl"
                  color="primary"
                  href="#"
                  onClick={() => {
                    setIsMenuOpen();
                  }}
                >
                  Accedi
                </NextLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NextLink
                  className="text-xl"
                  color="primary"
                  href="#"
                  onClick={() => {
                    setIsMenuOpen();
                  }}
                >
                  Registrati
                </NextLink>
              </NavbarMenuItem>
            </>
          ) : (
            <>
              <NavbarMenuItem>
                <NextLink
                  className="text-xl text-primary"
                  href="#"
                  onClick={() => {
                    setIsMenuOpen();
                  }}
                >
                  Profilo
                </NextLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NextLink
                  className="text-xl text-danger"
                  href="#"
                  onClick={() => {
                    setIsMenuOpen();
                  }}
                >
                  Esci
                </NextLink>
              </NavbarMenuItem>
            </>
          )}
        </div>
      </NavbarMenu>

      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Tabs
                  fullWidth
                  size="md"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="login" title="Login">
                    <form className="flex flex-col gap-4">
                      <Input
                        isRequired
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                      />
                      <p className="text-center text-small">
                        Need to create an account?{" "}
                        <Link size="sm" onPress={() => setSelected("sign-up")}>
                          Sign up
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary">
                          Login
                        </Button>
                      </div>
                    </form>
                  </Tab>
                  <Tab key="sign-up" title="Sign up">
                    <form className="flex flex-col gap-4 h-[300px]">
                      <Input
                        isRequired
                        label="Name"
                        placeholder="Enter your name"
                        type="password"
                      />
                      <Input
                        isRequired
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                      />
                      <p className="text-center text-small">
                        Already have an account?{" "}
                        <Link size="sm" onPress={() => setSelected("login")}>
                          Login
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary">
                          Sign up
                        </Button>
                      </div>
                    </form>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </NextUINavbar>
  );
};

import React from "react";
import { BookToRead } from "./BookToRead";

type BookRowProps = {
    book: BookToRead;
    onMemoChange: (id: number, memo:string) => void;
    onDelete: (id: number) => void;
}
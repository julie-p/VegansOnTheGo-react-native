import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search for Places"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/productSlice";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Add() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.counter.data);
  const [search, setSearch] = useState("");
  const filteredData = data.filter((elem) =>
    elem.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ margin: "10px" }}
      />

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData &&
              filteredData.map((elem) => (
                <Tr>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td>{elem.price}</Td>
                  <Td>{elem.type}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Add;

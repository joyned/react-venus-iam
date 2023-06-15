import { useEffect, useState } from "react";
import { FaFile, FaRegEdit } from "react-icons/fa";
import Table from "../../Components/Table/Table";
import TableBody from "../../Components/Table/TableBody";
import TableBodyItem from "../../Components/Table/TableBodyItem";
import TableHeader from "../../Components/Table/TableHeader";
import TableHeaderItem from "../../Components/Table/TableHeaderItem";
import './Tasks.css';


function Tasks() {
    const headers = ["Task", "Created Date", "Due Date", "Status", "Owner", "Actions"];
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/v1/task');
                const json = await response.json();
                json.forEach(item => {
                    item.createdAt = new Date(item.createdAt).toLocaleDateString();
                    item.dueDate = new Date(item.dueDate).toLocaleDateString();
                })
                setData(json);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            <p>Here are listed your tasks and tasks that you have access (View or Edit).</p>
            <Table>
                <TableHeader>
                    {headers.map(header => {
                        return <TableHeaderItem value={header}></TableHeaderItem>
                    })}
                </TableHeader>
                <TableBody>
                    {data && data.map(item => {
                        return (
                            <>
                                <TableBodyItem value={item.name}></TableBodyItem>
                                <TableBodyItem value={item.createdAt}></TableBodyItem>
                                <TableBodyItem value={item.dueDate}></TableBodyItem>
                                <TableBodyItem value={item.status}></TableBodyItem>
                                <TableBodyItem value={item.ownerId}></TableBodyItem>
                                <TableBodyItem value={<>
                                    <FaFile title="Open" />
                                    {item.ownerId === 1 ? (<FaRegEdit title="Edit" />) : ''}
                                </>}></TableBodyItem>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default Tasks;
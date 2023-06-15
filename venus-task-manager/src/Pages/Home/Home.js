import { FaExternalLinkAlt } from 'react-icons/fa';
import Card from "../../Components/Card/Card";
import Grid from '../../Components/Grid/Grid';
import Table from "../../Components/Table/Table";
import TableBody from "../../Components/Table/TableBody";
import TableBodyItem from "../../Components/Table/TableBodyItem";
import TableHeader from "../../Components/Table/TableHeader";
import TableHeaderItem from "../../Components/Table/TableHeaderItem";

const items = [
    {
        id: 1,
        name: 'Configurar Bitbucket',
        dueDate: '10/05/2023',
        status: "Done"
    },
    {
        id: 2,
        name: 'Configurar Pipelines',
        dueDate: '18/08/2023',
        status: "Pending"
    },
    {
        id: 3,
        name: 'Deploy',
        dueDate: '20/08/2023',
        status: "Pending"
    },
    {
        id: 4,
        name: 'Configurar aplicação',
        dueDate: '01/09/2023',
        status: "Pending"
    }
]

const headers = ["Task", "Due Date", "Status", "View"];

function Home() {
    return (
        <Grid columns={2}>
            <Card title="My Open Tasks">
                <p>Preview of the high value tasks in your name.</p>
                <Table>
                    <TableHeader>
                        {headers.map(header => {
                            return <TableHeaderItem value={header}></TableHeaderItem>
                        })}
                    </TableHeader>
                    <TableBody>
                        {items.map(item => {
                            return (
                                <>
                                    <TableBodyItem value={item.name}></TableBodyItem>
                                    <TableBodyItem value={item.dueDate}></TableBodyItem>
                                    <TableBodyItem value={item.status}></TableBodyItem>
                                    <TableBodyItem value={<FaExternalLinkAlt />}></TableBodyItem>
                                </>
                            )
                        })}
                    </TableBody>
                </Table>
            </Card>
        </Grid>
    )
}

export default Home;
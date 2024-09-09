import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, Plus, Trash2, SquarePen } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Clientes</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do Cliente"></Input>
          <Input name="id" placeholder="Nome do Cliente"></Input>
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </form>

        <Dialog>
          <DialogTrigger>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Cliente</DialogTitle>
              <DialogDescription>
                Preencha os campos abaixo para adicionar um novo cliente.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name" className="text-nowrap">
                  Nome
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="email" className="text-nowrap">
                  E-mail
                </Label>
                <Input id="email" className="col-span-3" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Adicionar Cliente</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table className="text-center">
          <TableHeader>
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Nome do Cliente</TableHead>
            <TableHead className="text-center">E-mail</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Ação</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>Caio Marcelo</TableCell>
                  <TableCell>caiio.bolognesi@gmail.com</TableCell>
                  <TableCell>
                    <span className="flex bg-green-400/80 rounded-full justify-center p-1 font-semibold ml-1 text-white">
                      Ativo
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-1">
                      <div className="bg-blue-200/80 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center">
                        <SquarePen className="w-5 h-5" />
                      </div>
                      <div className="bg-red-200/80 text-red-800 w-8 h-8 rounded-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5" />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

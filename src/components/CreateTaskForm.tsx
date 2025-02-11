import { PlusIcon } from "@radix-ui/react-icons"
import { Button, Dialog, Flex } from "@radix-ui/themes"

export const CreateTaskForm: React.FC = () => {
    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <PlusIcon/>Adicionar Tarefa
                </Button>
            </Dialog.Trigger>

            <Dialog.Title>Adicionando Tarefa</Dialog.Title>

            <Dialog.Content maxWidth="32rem">
                <Flex direction="column" gap="4">
                    <Dialog.Close>
                        <Button color="red">Cancelar</Button>    
                    </Dialog.Close>
                    <Button type="submit" color="green">Criar a Tarefa</Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
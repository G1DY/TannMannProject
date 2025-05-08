import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Textarea } from './ui/textarea';

interface Props {
  open: boolean;
  description: string;
  setDescription: (val: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal = ({
  open,
  description,
  setDescription,
  onClose,
  onSubmit,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Design Description</DialogTitle>
          <DialogDescription>
            Describe your design for Male Fashion.
          </DialogDescription>
        </DialogHeader>

        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your design description..."
          rows={4}
        />

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;

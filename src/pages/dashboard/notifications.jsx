import React, { useEffect, useState } from 'react';
import { Alert } from '@material-tailwind/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Notifications = ({
  message,
  color = 'blue',
  duration = 3000,
  showIcon = false,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <Alert
      open={open}
      color={color}
      icon={
        showIcon ? (
          <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
        ) : undefined
      }
      onClose={() => setOpen(false)}
      className="fixed top-5 right-5 z-50"
    >
      {message}
    </Alert>
  );
};

export default Notifications;

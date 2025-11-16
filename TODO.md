# TODO: Make Chat Container Resizable

- [x] Add resize handle div to messages.html inside .chat-container
- [x] Update stylesheet.css: Make .chat-container position: relative and add styles for .resize-handle
- [x] Add JavaScript to script.js for drag resizing functionality

# TODO: Implement Unread Message Tracking and Last Read Indicator

- [x] Add variables in script.js for tracking last read message ID and unread count
- [x] Modify loadMessages to set last read position to the most recent message
- [x] Update addMessage to check if user is scrolled to bottom; if not, increment unread count and skip auto-scroll
- [x] Add visual indicator (e.g., a horizontal line) above the last read message
- [x] Update real-time listener to handle unread messages appropriately
- [x] Add unread message counter in the chat header
- [x] Persist last read position in localStorage for page reloads
- [x] Auto-scroll to new messages when at bottom and window focused
- [x] Update document title with unread count

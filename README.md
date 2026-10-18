# Simple Product Dashboard

## File Organization
- `src/App.jsx`: Root component maintaining application state (`showProducts`, `name`) and managing conditional UI rendering.
- `src/components/ProductList.jsx`: Renders the array of static product objects using `.map()` and unique IDs as keys.
- `src/components/Product.jsx`: Reusable stateless display component for an individual product.
- `src/components/Card.jsx`: Layout container utilizing React composition (`children`) to wrap content.

## Challenges Faced
- Ensuring component composition (`Card.jsx`) remained completely decoupled from the data rendered inside it.
- Managing controlled input state and toggle behavior cleanly without using unauthorized hooks like `useEffect`.

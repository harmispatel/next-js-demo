import Link from "next/link";

export default function studentlist() {
  return (
    <div>
      <h1>Student list</h1>
      <ul>
        <li>
          <Link href="/studentlist/vansh">Vansh</Link>
        </li>
        <li>
          <Link href="/studentlist/krut">Krut</Link>
        </li>
        <li>
          <Link href="/studentlist/hasan">Hasan</Link>
        </li>
        <li>
          <Link href="/studentlist/hardik">Hardik</Link>
        </li>
      </ul>
    </div>
  );
}

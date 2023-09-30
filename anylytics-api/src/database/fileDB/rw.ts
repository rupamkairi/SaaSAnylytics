const DB_FILE = "logs/db.log";
const file = Bun.file(DB_FILE);
const writer = file.writer();

export function write() {}

export async function writeLine(buffer: string) {
  try {
    writer.write(buffer + "\n");
    writer.flush();
  } catch (error) {
    console.log(error);
  }
}

export async function read() {
  try {
    const data = await file.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}

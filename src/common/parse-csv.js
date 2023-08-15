export function parseCSV(csv) {
    const [header, ...rows] = csv.split('\n');
    const keys = header.split(',');

    return rows.map((row) => {
        return Object.fromEntries(
            row.split(',').map((item, index) => [
                keys[index].trim(),
                item.trim()
            ])
        );
    });
}

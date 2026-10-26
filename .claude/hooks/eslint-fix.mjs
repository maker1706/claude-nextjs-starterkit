// PostToolUse 훅: 수정된 .ts/.tsx 파일에 eslint --fix 자동 실행
import { spawnSync } from "node:child_process";

// stdin으로 전달되는 훅 입력(JSON) 읽기
let raw = "";
for await (const chunk of process.stdin) {
  raw += chunk;
}

const input = JSON.parse(raw);
const filePath = input.tool_input?.file_path;

// 대상이 아닌 파일은 조용히 통과
if (typeof filePath !== "string" || !/\.(ts|tsx)$/.test(filePath)) {
  process.exit(0);
}

// Windows의 npx.cmd 실행을 위해 shell 사용 (경로는 따옴표로 감쌈)
const result = spawnSync(`npx eslint --fix "${filePath}"`, {
  cwd: input.cwd,
  encoding: "utf8",
  shell: true,
});

// 수정 불가능한 lint 오류가 남으면 Claude에게 전달 (exit 2 → stderr 표시)
if (result.status !== 0) {
  console.error(result.stdout || result.stderr);
  process.exit(2);
}

param(
  [int]$Port = 5500
)

$workspaceRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$serverScript = Join-Path $workspaceRoot "tools\dev-server.cjs"

$nodeCandidates = @()
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue

if ($nodeCommand -and $nodeCommand.Source -and $nodeCommand.Source -notlike "*WindowsApps*") {
  $nodeCandidates += $nodeCommand.Source
}

$nodeCandidates += @(
  "C:\Users\axelj\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe",
  "C:\Program Files\nodejs\node.exe",
  "C:\Program Files (x86)\nodejs\node.exe",
  (Join-Path $env:LOCALAPPDATA "Programs\nodejs\node.exe")
)

$nodePath = $nodeCandidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if (-not $nodePath) {
  Write-Error "No se encontró una instalación de Node.js utilizable para correr el servidor local."
  exit 1
}

Write-Host "Starting dev server..."
& $nodePath $serverScript $Port

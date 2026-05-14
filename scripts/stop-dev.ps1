param(
  [int]$Port = 5500
)

$listeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue

if (-not $listeners) {
  Write-Host "No se encontró ningún servidor escuchando en el puerto $Port."
  exit 0
}

$processIds = $listeners | Select-Object -ExpandProperty OwningProcess -Unique

foreach ($processId in $processIds) {
  try {
    Stop-Process -Id $processId -Force -ErrorAction Stop
    Write-Host "Servidor detenido. PID: $processId"
  } catch {
    Write-Warning "No se pudo detener el proceso $processId"
  }
}
